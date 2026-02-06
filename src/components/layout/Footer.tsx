import { Link } from 'react-router-dom'
import { GraduationCap, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Footer() {
  return (
    <footer className="border-t bg-card/50">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <Link to="/" className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-growfit text-white">
                <GraduationCap className="h-5 w-5" />
              </div>
              <span className="text-lg font-bold">
                Grow<span className="text-growfit">Fit</span>
              </span>
            </Link>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              AI 교육, GrowFit 하나면 충분합니다.<br />
              8차시 40시간 에이전트 클래스 커리큘럼.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-3">커리큘럼</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/curriculum" className="hover:text-foreground transition-colors">8차시 커리큘럼</Link></li>
              <li><Link to="/scenarios" className="hover:text-foreground transition-colors">확장 시나리오</Link></li>
              <li><Link to="/instructor" className="hover:text-foreground transition-colors">강사 가이드</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-3">GrowFit</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="https://growfit.onecloud.kr" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 hover:text-foreground transition-colors">
                  GrowFit 플랫폼 <ExternalLink className="h-3 w-3" />
                </a>
              </li>
              <li><span>BCT ONE Inc.</span></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-3">시작하기</h4>
            <a href="https://growfit.onecloud.kr" target="_blank" rel="noopener noreferrer">
              <Button className="w-full bg-growfit hover:bg-growfit/90 text-white">
                GrowFit 무료 체험
              </Button>
            </a>
          </div>
        </div>

        <div className="mt-10 border-t pt-6 text-center text-xs text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} BCT ONE Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
