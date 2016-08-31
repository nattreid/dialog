<?php

namespace NAttreid\Dialog;

/**
 * Dialog
 * 
 * @author Attreid <attreid@gmail.com>
 */
abstract class Dialog extends \Nette\Application\UI\Control {

    /**
     * @var boolean
     * @persistent
     */
    public $view = FALSE;

    /** @var boolean */
    private $fixed = FALSE;

    /** @var boolean */
    private $redrawOnResize = TRUE;

    public function handleOpen() {
        $this->open();
    }

    public function handleClose() {
        $this->close();
    }

    /**
     * Otevreni dialogu
     */
    public function open() {
        $this->view = TRUE;
        $this->redrawControl('dialog');
    }

    /**
     * Znovunacteni dialogu
     */
    public function refresh() {
        $this->view = TRUE;
        $this->redrawControl('dialogContent');
    }

    /**
     * Zavreni dialogu
     */
    public function close() {
        $this->view = FALSE;
        $this->redrawControl('dialog');
    }

    /**
     * Nastavi fixni zobrazeni
     */
    public function fixed() {
        $this->fixed = TRUE;
    }

    /**
     * Nastavi prekreslovani pri zmene rozliseni
     * @param boolean $redraw
     */
    public function redrawOnResize($redraw = TRUE) {
        $this->redrawOnResize = $redraw;
    }

    public function render() {
        $this->template->layout = __DIR__ . '/dialog.latte';
        $this->template->componentId = $this->getUniqueId();

        $this->template->view = $this->view;
        $this->template->fixed = $this->fixed;
        $this->template->redrawOnResize = $this->redrawOnResize;

        $this->template->render();
    }

}
