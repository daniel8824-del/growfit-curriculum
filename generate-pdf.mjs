import puppeteer from 'puppeteer'

const BASE_URL = 'http://localhost:5173'
const OUTPUT = './growfit-curriculum-slides.pdf'

async function main() {
  console.log('Launching browser...')
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  })
  const page = await browser.newPage()
  await page.setViewport({ width: 1280, height: 720 })

  console.log(`Navigating to ${BASE_URL}/print ...`)
  const response = await page.goto(`${BASE_URL}/print`, {
    waitUntil: 'networkidle2',
    timeout: 90000,
  })
  console.log(`Status: ${response?.status()}`)

  // Wait for React to render
  await new Promise((r) => setTimeout(r, 5000))

  // Debug: screenshot + html check
  await page.screenshot({ path: './debug-print.png', fullPage: false })
  const html = await page.content()
  const hasSlide = html.includes('class="slide"')
  console.log(`HTML has .slide class: ${hasSlide}`)
  console.log(`HTML length: ${html.length}`)

  if (!hasSlide) {
    // Try #print-root or any div
    const bodyText = await page.$eval('body', (el) => el.innerText.slice(0, 500))
    console.log(`Body text: ${bodyText}`)
    await browser.close()
    process.exit(1)
  }

  const slideCount = await page.$$eval('.slide', (els) => els.length)
  console.log(`Found ${slideCount} slides`)

  console.log(`Generating PDF: ${OUTPUT}`)
  await page.pdf({
    path: OUTPUT,
    width: '1280px',
    height: '720px',
    printBackground: true,
    preferCSSPageSize: false,
    margin: { top: 0, right: 0, bottom: 0, left: 0 },
    timeout: 120000,
  })

  await browser.close()
  console.log(`Done! PDF saved to ${OUTPUT}`)
}

main().catch(async (err) => {
  console.error('Error:', err.message)
  process.exit(1)
})
