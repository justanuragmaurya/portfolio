FROM node:22-alpine

WORKDIR /app

COPY ./package.json .

RUN npm install pnpm -g
RUN pnpm install

COPY . .

RUN npx prisma generate

EXPOSE 3000

RUN pnpm build

CMD [ "pnpm","start"]