import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-4 text-center">
      <h1 className="text-8xl font-bold text-growfit">404</h1>
      <p className="mt-4 text-xl text-muted-foreground">
        페이지를 찾을 수 없습니다
      </p>
      <p className="mt-2 text-sm text-muted-foreground">
        요청하신 페이지가 존재하지 않거나 이동되었습니다.
      </p>
      <Link
        to="/"
        className="mt-8 inline-flex items-center rounded-lg bg-growfit px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-growfit/90"
      >
        홈으로 돌아가기
      </Link>
    </div>
  )
}
