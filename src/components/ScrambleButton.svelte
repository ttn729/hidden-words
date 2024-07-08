<script>
	/**
	 * @type {string}
	 */
	export let words;
	/**
	 * @type {string}
	 */
	export let meanings;

	/**
	 * @type {(arg0: any) => void}
	 */
	export let updateWords;
	/**
	 * @type {(arg0: any) => void}
	 */
	export let updateMeanings;

	$: wordsArray = words ? words.split('\n') : [];
	$: meaningsArray = meanings ? meanings.split('\n') : [];

	function shuffleArray() {
		for (let i = wordsArray.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1)); // Random index from 0 to i

			// Swap elements array[i] and array[j]
			[wordsArray[i], wordsArray[j]] = [wordsArray[j], wordsArray[i]];
			[meaningsArray[i], meaningsArray[j]] = [meaningsArray[j], meaningsArray[i]];
		}
	}

	function handleScramble() {
        console.log('clicked scramble')
        shuffleArray()
        updateWords(wordsArray.join('\n'));
        updateMeanings(meaningsArray.join('\n'));

        console.log(meanings)
	}
</script>

<button on:click={handleScramble}>Scramble Order</button>
