# Modal pro Nette Framework

## Použití
Vytvoříme potomka třídy *NAttreid\Modal\Modal*
```php
class MyModal extends NAttreid\Modal\Modal {
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