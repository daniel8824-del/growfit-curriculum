import { useRouteError, isRouteErrorResponse, Link } from 'react-router-dom'

export default function ErrorPage() {
  const error = useRouteError()

  let title = '오류가 발생했습니다'
  let message = '예기치 않은 오류가 발생했습니다. 잠시 후 다시 시도해주세요.'

  if (isRouteErrorResponse(error)) {
    if (error.status === 404) {
      title = '페이지를 찾을 수 없습니다'
      message = '요청하신 페이지가 존재하지 않거나 이동되었습니다.'
    } else {
      title = `${error.status} 오류`
      message = error.statusText || message
    }
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-4 text-center">
      <h1 className="text-6xl font-bold text-growfit">{isRouteErrorResponse(error) ? error.status : '오류'}</h1>
      <p className="mt-4 text-xl text-foreground">{title}</p>
      <p className="mt-2 text-sm text-muted-foreground">{message}</p>
      <Link
        to="/"
        className="mt-8 inline-flex items-center rounded-lg bg-growfit px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-growfit/90"
      >
        홈으로 돌아가기
      </Link>
    </div>
  )
}
