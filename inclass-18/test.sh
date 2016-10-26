#!/bin/bash
PORT=3000

echo "GET /"
curl -H 'Content-Type: application/json' http://localhost:${PORT}
echo ""
echo ""

echo "GET /articles"
curl -H 'Content-Type: application/json' http://localhost:${PORT}/articles
echo ""
echo ""

echo "POST /article"
curl -H 'Content-Type: application/json' http://localhost:${PORT}/article -d "{ \"text\":\"This is my new article! $(date)\" }" 
echo ""
echo ""

echo "GET /articles"
curl -H 'Content-Type: application/json' http://localhost:${PORT}/articles 
echo ""
echo ""

echo "GET /articles/0"
curl -H 'Content-Type: application/json' http://localhost:${PORT}/articles/0
echo ""
echo ""

echo "GET /articles/2"
curl -H 'Content-Type: application/json' http://localhost:${PORT}/articles/2
echo ""
echo ""