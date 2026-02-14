# Storybook 설정 가이드

Storybook이 Next.js App Router와 Tailwind CSS v4와 함께 작동하도록 설정되었습니다.

## 필요한 패키지 설치

다음 명령어로 Storybook 관련 패키지를 설치하세요:

```bash
pnpm add -D @storybook/react @storybook/react-vite @storybook/addon-essentials @storybook/addon-interactions @storybook/addon-links @storybook/blocks @storybook/test @storybook/builder-vite storybook vite
```

## 사용 방법

### Storybook 실행

```bash
pnpm storybook
```

브라우저에서 `http://localhost:6006`으로 접속하면 Storybook을 확인할 수 있습니다.

### Storybook 빌드

```bash
pnpm build-storybook
```

빌드된 파일은 `storybook-static` 디렉토리에 생성됩니다.

## 설정 내용

- **`.storybook/main.ts`**: Storybook 메인 설정 파일
  - Vite를 빌더로 사용
  - TypeScript 경로 alias (`@/*`) 지원
  - Tailwind CSS v4 PostCSS 플러그인 설정

- **`.storybook/preview.ts`**: Storybook 프리뷰 설정
  - 전역 CSS (`globals.css`) 임포트
  - Next.js App Router 지원
  - 다크 모드 지원을 위한 기본 스타일 적용

- **`.storybook/manager.ts`**: Storybook 매니저 설정

## 예제 Story

`src/components/ui/button.stories.tsx` 파일에 Button 컴포넌트의 예제 Story가 포함되어 있습니다.

## 새로운 Story 작성하기

컴포넌트와 같은 디렉토리에 `컴포넌트명.stories.tsx` 파일을 생성하세요:

```typescript
import type { Meta, StoryObj } from "@storybook/react";
import { YourComponent } from "./your-component";

const meta = {
  title: "UI/YourComponent",
  component: YourComponent,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof YourComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    // props here
  },
};
```

