ENV=staging

# Test
api-test:
	ENV=$(ENV) npx playwright test --grep "@api"

ui-test:
	ENV=$(ENV) npx playwright test --grep "@ui"

visual-test:
	ENV=$(ENV) npx playwright test --grep "@visual"

smoke-test:
	ENV=$(ENV) npx playwright test --grep "@smoke"

regression-test:
	ENV=$(ENV) npx playwright test

test:
	ifeq ($(TEST_TYPE), regression)
		ENV=$(ENV) npx playwright test
	else
		ENV=$(ENV) npx playwright test --grep "$(TEST_TYPE)"
	endif
