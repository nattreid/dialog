<?php

declare(strict_types=1);

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
	 * @var string
	 * @persistent
	 */
	public $view = null;

	/** @var bool */
	private $fixed = false;

	/** @var bool */
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
		$this->view = 'true';
		$this->redrawControl('dialog');
	}

	/**
	 * Znovunacteni dialogu
	 */
	public function refresh()
	{
		$this->view = 'true';
		$this->redrawControl('dialogContent');
	}

	/**
	 * Zavreni dialogu
	 */
	public function close()
	{
		$this->view = null;
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
	 * @param bool $redraw
	 */
	public function redrawOnResize(bool $redraw = true)
	{
		$this->redrawOnResize = $redraw;
	}

	public function render()
	{
		$this->template->layout = __DIR__ . '/dialog.latte';
		$this->template->componentId = $this->getUniqueId();

		$this->template->view = (bool) $this->view;
		$this->template->fixed = $this->fixed;
		$this->template->redrawOnResize = $this->redrawOnResize;

		$this->template->render();
	}

}
