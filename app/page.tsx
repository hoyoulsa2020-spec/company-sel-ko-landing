export default function HomePage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-3xl flex-col justify-center px-6 py-16">
      <p className="text-sm font-medium text-indigo-600">회사 소개</p>
      <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">셀인코치</h1>
      <p className="mt-4 text-lg text-gray-600">
        셀프인테리어 소비자와 전문 시공업체를 연결하는 플랫폼입니다.
      </p>
      <p className="mt-8 text-sm text-gray-500">
        이 페이지는 <code className="rounded bg-gray-100 px-1.5 py-0.5">company.sel-ko.co.kr</code> 전용
        랜딩입니다. 내용은 여기서 수정하세요.
      </p>
    </main>
  );
}
