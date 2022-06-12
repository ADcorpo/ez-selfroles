FROM denoland/deno:alpine

MAINTAINER adcorporate <shopsettes@pm.me>

RUN apk add git && \
    git clone https://github.com/ADcorpo/ez-selfroles.git

USER deno
WORKDIR /ez-selfroles/src

ENTRYPOINT ["deno", "run", "--allow-net", "--allow-env", "main.ts"]