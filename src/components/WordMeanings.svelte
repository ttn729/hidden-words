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


	/**
	 * @param {{ target: any }} event
	 */
	function handleWordsChange(event) {
		updateWords(event.target.value);
	}

    	/**
	 * @param {{ target: any }} event
	 */
	function handleMeaningsChange(event) {
		updateMeanings(event.target.value);
	}

	let numRows = 50;
</script>

<div class="wordMeaningsContainer">
	<div>
		<h1>Words</h1>
		<textarea bind:value={words} on:input={handleWordsChange} rows={numRows}/>
	</div>
	<div>
		<h1>Meanings</h1>
		<textarea bind:value={meanings} on:input={handleMeaningsChange} rows={numRows} />
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
        padding: 8px; /* Optional: Add padding for better appearance */
        box-sizing: border-box; /* Ensure padding is included in the width */
		overflow-y: auto; 
    }
</style>
