import os
from selenium import webdriver


def count_calcs():
    return len(driver.find_elements_by_css_selector('.calculator'))


script_dir = os.path.dirname(os.path.realpath(__file__))
index_html = os.path.join(script_dir, '../site/index.html')

driver = webdriver.Firefox()
driver.get("file://" + index_html)
assert "Awesome Calculator" in driver.title

create_button = driver.find_element_by_css_selector("#calc-creator button")

create_button.click()
assert count_calcs() == 1

create_button.click()
assert count_calcs() == 2

count_span = driver.find_element_by_css_selector("#calc-creator .num-calcs")
assert '2' == count_span.text

driver.close()
