# https://pnpm.io/docker
FROM node:20-slim as node
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable
RUN mkdir -p /home/couch-gag-admin/website
WORKDIR /home/couch-gag-admin/website
COPY ./ ./
RUN pnpm install --frozen-lockfile
ENV VERSION=v1.0.0-rc_0.1
RUN pnpm pkg:metadata ${VERSION}
RUN pnpm build

FROM nginx as webserver
COPY --from=node --chown=node:webserver /home/couch-gag-admin/website/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
