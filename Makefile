ENV=staging

# Test
api-test:
	ENV=${ENV} npx playwright test --grep "@api"

ui-test:
	ENV=${ENV} npx playwright test --grep "@ui"

visual-test:
	ENV=${ENV} npx playwright test --grep "@visual"

smoke-test:
	ENV=${ENV} npx playwright test --grep "@smoke"

regression-test:
	ENV=${ENV} npx playwright test

test:
	ENV=${ENV} TEST_TYPE=${TEST_TYPE} npx playwright test
