<script lang="ts">
	// @ts-nocheck
	import { store } from '../store';
	const NUM_ROWS = 50;
</script>

<div class="wordMeaningsContainer">
	<div>
		<h1>Words</h1>
		<textarea
			value={$store.words}
			oninput={(e) => store.setWords(e.target.value)}
			rows={NUM_ROWS}
			placeholder="Input the words"
		></textarea>
	</div>
	<div>
		<h1>Meanings</h1>
		<textarea
			value={$store.meanings}
			oninput={(e) => store.setMeanings(e.target.value)}
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
