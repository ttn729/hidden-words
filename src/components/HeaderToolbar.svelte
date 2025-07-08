<script>
	// @ts-nocheck
	import ScrambleButton from './ScrambleButton.svelte';
	let { toggleWords } = $props();
	import { store } from '../store';

	function handleClickPrint() {
		store.togglePrintMode();
	}
</script>

<div class="no-print">
	<button onclick={handleClickPrint}>Printer Friendly</button>
	<ScrambleButton />
	<button onclick={toggleWords}>Hide Words</button>
	<input
		type="number"
		min="0"
		max="100"
		placeholder="0-100%"
		value={$store.percentHideWords}
		oninput={(e) => store.setPercentHideWords(Number(e.target.value))}
	/>
	<input
		type="number"
		min="0"
		max="100"
		placeholder="# Lines"
		value={$store.numLines}
		oninput={(e) => store.setNumLines(Number(e.target.value))}
	/>
</div>

<style>
	@media print {
		.no-print {
			display: none !important;
		}
	}
</style>
