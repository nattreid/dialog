# Dialog pro Nette Framework

## Použití
Vytvoříme potomka třídy *App/Components/Dialog*
```php
class MyDialog extends NAttreid\Dialog\Dialog {
    public function render() {
        $template = $this->template;
        $template->setFile(__DIR__ . '/default.latte');
        parent::render();
    }
}
```

a v latte podědíme pomocí 
```latte
{extends $layout}
{block content}
    html ...
```