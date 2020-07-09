FROM postgres:12.3-alpine

COPY *.sql /docker-entrypoint-initdb.d/

# EXPOSE 5432

RUN chmod a+r /docker-entrypoint-initdb.d/

