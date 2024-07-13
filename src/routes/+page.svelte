<script>
	import NameClass from '../components/NameClass.svelte';
	import PrintButton from '../components/PrintButton.svelte';
	import ScrambleButton from '../components/ScrambleButton.svelte';
	import TopicTitle from '../components/TopicTitle.svelte';
	import WordMeanings from '../components/WordMeanings.svelte';
	import WordMeaningsTable from '../components/WordMeaningsTable.svelte';

	import { onMount, onDestroy } from 'svelte';

	let hideElement = false;

	const handleBeforePrint = () => {
		hideElement = true;
	};

	const handleAfterPrint = () => {
		hideElement = false;
	};

	onMount(() => {
		if (typeof window !== 'undefined') {
			window.addEventListener('beforeprint', handleBeforePrint);
			window.addEventListener('afterprint', handleAfterPrint);
		}
	});

	onDestroy(() => {
		if (typeof window !== 'undefined') {
			window.removeEventListener('beforeprint', handleBeforePrint);
			window.removeEventListener('afterprint', handleAfterPrint);
		}
	});

	let topicName = '';
	let words = '';
	let meanings = '';
	let originalWords; // Keep a copy of the original words
	let originalMeanings; // Keep a copy of the original words

	let percentHideWords;
	let printMode = false;
	let clickedToggleHide = false;

	function handleClickPrint() {
		printMode = !printMode;
	}

	/**
	 * @param {string} newWords
	 */
	function updateWords(newWords) {
		words = newWords;
	}

	/**
	 * @param {string} newMeanings
	 */
	function updateMeanings(newMeanings) {
		meanings = newMeanings;
	}

	/**
	 * @param {string} newTopicName
	 */
	function updateTopicName(newTopicName) {
		topicName = newTopicName;
	}

	function toggleWords() {
		if (!clickedToggleHide) {
			// Original words are still intact, so call hideWords
			originalWords = words;
			originalMeanings = meanings;
			hideWords();
		} else {
			// Restore original words
			words = originalWords;
			meanings = originalMeanings;
		}
		clickedToggleHide = !clickedToggleHide
	}

	function hideWords() {
		let wordsArray = words.split('\n');
		let meaningsArray = meanings.split('\n');

		let manipulatedWords = [];
		let manipulatedMeanings = [];

		const n = wordsArray.length;

		// Determine how many words to make empty
		const numToMakeEmpty = Number.isInteger(percentHideWords) ? Math.floor(percentHideWords / 100 * n) : .8 * n 

		// Create an array to store indices of words to make empty
		let emptyIndices = [];

		// Randomly select indices to make empty
		while (emptyIndices.length < numToMakeEmpty) {
			const randomIndex = Math.floor(Math.random() * n);
			if (!emptyIndices.includes(randomIndex)) {
				emptyIndices.push(randomIndex);
			}
		}

		// Initialize result arrays
		console.log(meaningsArray[0])

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

		updateWords(manipulatedWords.join('\n'));
		updateMeanings(manipulatedMeanings.join('\n'));
	}
</script>

{#if !hideElement}
	<PrintButton {handleClickPrint} />
	<ScrambleButton {words} {meanings} {updateWords} {updateMeanings} />
	<button on:click={toggleWords}>Hide Words</button>
	<input type='number' min='0' max="100" placeholder="0-100%" bind:value={percentHideWords}/>
{/if}

{#if !printMode}
	<NameClass />
	<TopicTitle {topicName} {updateTopicName} />
	<WordMeanings {words} {meanings} {updateWords} {updateMeanings} />
{:else}
	<NameClass />
	<WordMeaningsTable {words} {meanings} {topicName} />
{/if}
