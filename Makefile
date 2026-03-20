.PHONY: dev-w dev-e dev-both open-w open-e open-both

dev-w:
	@mkdir -p dist-w
	@cp -R ./public/. ./dist-w/
	npx parcel ./src/index-w.html --port 1234 --dist-dir dist-w --cache-dir .parcel-cache-w

dev-e:
	@mkdir -p dist-e
	@cp -R ./public/. ./dist-e/
	npx parcel ./src/index-e.html --port 1235 --dist-dir dist-e --cache-dir .parcel-cache-e

dev-both:
	@mkdir -p dist-w dist-e
	@cp -R ./public/. ./dist-w/
	@cp -R ./public/. ./dist-e/
	@echo "Wotori: http://localhost:1234"
	@echo "Ekza:   http://localhost:1235"
	@trap 'kill 0' EXIT INT TERM; \
		npx parcel ./src/index-w.html --port 1234 --dist-dir dist-w --cache-dir .parcel-cache-w & \
		npx parcel ./src/index-e.html --port 1235 --dist-dir dist-e --cache-dir .parcel-cache-e & \
		wait

open-w:
	open http://localhost:1234

open-e:
	open http://localhost:1235

open-both:
	open http://localhost:1234
	open http://localhost:1235
