<script lang="ts">

	export let words: string;
	export let meanings: string;
	export let updateWords: (arg0: any) => void;
	export let updateMeanings: (arg0: any) => void;

	function handleWordsChange(event: { target: { value: any; }; }) {
		updateWords(event.target.value);
	}

	function handleMeaningsChange(event: { target: { value: any; }; }) {
		updateMeanings(event.target.value);
	}

	let numRows = 50;
</script>

<div class="wordMeaningsContainer">
	<div>
		<h1>Words</h1>
		<textarea
			bind:value={words}
			on:input={() => handleWordsChange}
			rows={numRows}
			placeholder="Input the words"
		></textarea>
	</div>
	<div>
		<h1>Meanings</h1>
		<textarea
			bind:value={meanings}
			on:input={() => handleMeaningsChange}
			rows={numRows}
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
