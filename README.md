# company.sel-ko.co.kr — 회사 소개 랜딩

`self_coach_app`(셀코 앱)과 **별도 폴더 / 별도 Git** 입니다.

## 순서 (GitHub → Vercel)

### 1. 로컬에서 의존성 설치 & 확인

```bash
cd d:\company-sel-ko-landing
npm install
npm run dev
```

브라우저에서 http://localhost:3001 이 열리면 OK.

### 2. GitHub에 새 저장소 만들기

1. https://github.com/new  
2. Repository name: 예) `company-sel-ko-landing`  
3. **Public** 또는 Private 선택 → Create repository  
4. **아래 “push an existing repository”** 안내만 보면 됨.

### 3. 첫 커밋 & 푸시

```bash
cd d:\company-sel-ko-landing
git init
git add .
git commit -m "init: company landing"
git branch -M main
git remote add origin https://github.com/hoyoulsa2020-spec/company-sel-ko-landing.git
git push -u origin main
```

(`hoyoulsa2020-spec/company-sel-ko-landing` 은 본인이 만든 저장소 이름으로 바꾸세요.)

### 4. Vercel

1. Add New Project → **Import** 위에서 만든 GitHub 저장소  
2. Deploy  
3. **Settings → Domains** → `company.sel-ko.co.kr` 추가  
4. 기존 **`self-interior-coach`** 프로젝트에서는 `company.sel-ko.co.kr` **삭제** (한 도메인은 프로젝트 하나만)

### 5. Cloudflare DNS

이미 `company` → `cname.vercel-dns.com` 이면 보통 그대로 두면 됩니다. Vercel 새 프로젝트 연결 후 **Valid** 확인.

---

## Cursor에서 작업할 때

- 회사 사이트만 수정: **이 폴더만** 열기 (`File → Open Folder → d:\company-sel-ko-landing`)
- 앱 수정: `d:\self_coach_app` 만 열기  

섞어 열면 AI 맥락이 섞일 수 있음.
