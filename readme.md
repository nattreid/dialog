# Dialog pro Nette Framework

## Použití
```php
class MyDialog extends NAttreid\Dialog\Dialog {
    public function render() {
        $template = $this->template;
        $template->setFile(__DIR__ . '/default.latte');
        parent::render();
    }
}
```

```latte
{extends $layout}
{block content}
    html ...
```