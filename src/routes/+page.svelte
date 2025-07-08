<script lang="ts">
	import TopicTitle from '../components/TopicTitle.svelte';
	import WordMeanings from '../components/WordMeanings.svelte';
	import PrinterFriendlyContainer from '../components/Containers/PrinterFriendlyContainer.svelte';
	import HeaderToolbar from '../components/HeaderToolbar.svelte';
	import { store } from '../store';

	let originalWords: string; // Keep a copy of the original words
	let originalMeanings: string; // Keep a copy of the original words

	let clickedToggleHide = false;

	function toggleWords() {
		if (!clickedToggleHide) {
			// Original words are still intact, so call hideWords
			originalWords = $store.words;
			originalMeanings = $store.meanings;
			hideWords();
		} else {
			// Restore original words
			store.setWords(originalWords);
			store.setMeanings(originalMeanings);
		}
		clickedToggleHide = !clickedToggleHide;
	}

	function hideWords() {
		let wordsArray = $store.words.split('\n');
		let meaningsArray = $store.meanings.split('\n');

		let manipulatedWords = [];
		let manipulatedMeanings = [];

		const n = wordsArray.length;

		// Determine how many words to make empty
		const numToMakeEmpty = Number.isInteger($store.percentHideWords)
			? Math.floor(($store.percentHideWords / 100) * n)
			: 0.8 * n;

		// Create an array to store indices of words to make empty
		let emptyIndices: number[] = [];

		// Randomly select indices to make empty
		while (emptyIndices.length < numToMakeEmpty) {
			const randomIndex = Math.floor(Math.random() * n);
			if (!emptyIndices.includes(randomIndex)) {
				emptyIndices.push(randomIndex);
			}
		}

		// Iterate through each word and its corresponding meaning
		for (let i = 0; i < n; i++) {
			if (emptyIndices.includes(i)) {
				manipulatedWords.push('');
				manipulatedMeanings.push(meaningsArray[i]);
			} else {
				manipulatedWords.push(wordsArray[i]);
				manipulatedMeanings.push('');
			}
		}
		store.setWords(manipulatedWords.join('\n'));
		store.setMeanings(manipulatedMeanings.join('\n'));
	}
</script>

<HeaderToolbar {toggleWords} />

{#if $store.isPrintMode}
	<PrinterFriendlyContainer />
{:else}
	<TopicTitle />
	<WordMeanings />
{/if}
