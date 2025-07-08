<script lang="ts">
	import { store } from "../store";

	function handleWordsChange(event: { target: { value: any; }; }) {
		store.setWords(event.target.value);
	}

	function handleMeaningsChange(event: { target: { value: any; }; }) {
		store.setMeanings(event.target.value);
	}

	const NUM_ROWS = 50;
</script>

<div class="wordMeaningsContainer">
	<div>
		<h1>Words</h1>
		<textarea
			value={$store.words}
			oninput={() => handleWordsChange}
			rows={NUM_ROWS}
			placeholder="Input the words"
		></textarea>
	</div>
	<div>
		<h1>Meanings</h1>
		<textarea
			value={$store.meanings}
			oninput={() => handleMeaningsChange}
			rows={NUM_ROWS}
			placeholder="Input the meanings"
		></textarea>
	</div>
</div>

<style>
	.wordMeaningsContainer {
		display: flex;
		flex-direction: row;
		justify-content: center;
	}

	.wordMeaningsContainer textarea {
		width: 40vw; /* Adjust this value as needed */
		padding: 1vw; /* Optional: Add padding for better appearance */
		box-sizing: border-box; /* Ensure padding is included in the width */
		overflow-y: auto;
	}

	h1 {
		text-align: center;
	}
</style>
