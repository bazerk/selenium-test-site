from selenium import webdriver

driver = webdriver.Firefox()
driver.get("file:///home/andrew/dev/selenium-test-site/site/index.html")
assert "Awesome Calculator" in driver.title


def count_calcs():
    return len(driver.find_elements_by_css_selector('.calculator'))

create_button = driver.find_element_by_css_selector("#calc-creator button")

create_button.click()
assert count_calcs() == 1

create_button.click()
assert count_calcs() == 2

count_span = driver.find_element_by_css_selector("#calc-creator .num-calcs")
assert '2' == count_span.text

driver.close()
