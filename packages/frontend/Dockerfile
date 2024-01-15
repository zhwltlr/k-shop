# 공식 Node.js 이미지를 기본 이미지로 사용
FROM node:18

# 작업 디렉토리 설정
WORKDIR /usr/src/app

# package.json 및 yarn.lock 파일을 작업 디렉토리로 복사
COPY package.json yarn.lock ./

# 의존성 설치
RUN yarn install

# 나머지 애플리케이션 코드 복사
COPY . .

# Next.js가 실행될 포트 노출
EXPOSE 3000

# 애플리케이션 실행 명령어
CMD ["yarn", "dev"]
