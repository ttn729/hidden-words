<script lang="ts">

	export let words: string;
	export let meanings: string;
	export let updateWords: (arg0: any) => void;
	export let updateMeanings: (arg0: any) => void;

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
        shuffleArray()
        updateWords(wordsArray.join('\n'));
        updateMeanings(meaningsArray.join('\n'));
	}
</script>

<button on:click={handleScramble}>Scramble Order</button>
