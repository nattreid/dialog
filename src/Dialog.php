<?php

namespace NAttreid\Dialog;

use Nette\Application\UI\Control;

/**
 * Dialog
 *
 * @author Attreid <attreid@gmail.com>
 */
abstract class Dialog extends Control
{

	/**
	 * @var boolean
	 * @persistent
	 */
	public $view = false;

	/** @var boolean */
	private $fixed = false;

	/** @var boolean */
	private $redrawOnResize = true;

	public function handleOpen()
	{
		$this->open();
	}

	public function handleClose()
	{
		$this->close();
	}

	/**
	 * Otevreni dialogu
	 */
	public function open()
	{
		$this->view = true;
		$this->redrawControl('dialog');
	}

	/**
	 * Znovunacteni dialogu
	 */
	public function refresh()
	{
		$this->view = true;
		$this->redrawControl('dialogContent');
	}

	/**
	 * Zavreni dialogu
	 */
	public function close()
	{
		$this->view = false;
		$this->redrawControl('dialog');
	}

	/**
	 * Nastavi fixni zobrazeni
	 */
	public function fixed()
	{
		$this->fixed = true;
	}

	/**
	 * Nastavi prekreslovani pri zmene rozliseni
	 * @param boolean $redraw
	 */
	public function redrawOnResize($redraw = true)
	{
		$this->redrawOnResize = $redraw;
	}

	public function render()
	{
		$this->template->layout = __DIR__ . '/dialog.latte';
		$this->template->componentId = $this->getUniqueId();

		$this->template->view = $this->view;
		$this->template->fixed = $this->fixed;
		$this->template->redrawOnResize = $this->redrawOnResize;

		$this->template->render();
	}

}
