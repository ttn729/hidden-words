<script lang="ts">
	import { store } from "../store";

	$: wordsArray = $store.words ? $store.words.split('\n') : [];
	$: meaningsArray = $store.meanings ? $store.meanings.split('\n') : [];

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
        store.setWords(wordsArray.join('\n'));
        store.setMeanings(meaningsArray.join('\n'));
	}
</script>

<button onclick={handleScramble}>Scramble Order</button>
