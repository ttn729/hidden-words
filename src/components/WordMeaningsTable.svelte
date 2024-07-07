<script>
	export let words;
	export let meanings;
	export let topicName;

    $: wordsArray = words ? words.split('\n') : [];
	$: meaningsArray = meanings ? meanings.split('\n') : [];

	/**
	 * @param {number} length
	 */
	function generateIndicesArray(length) {
		return Array.from({ length }, (_, i) => i + 1);
	}

    /**
	 * @type {number[]}
	 */
    let indices = []
    $: if (wordsArray && meaningsArray) {
        indices = generateIndicesArray(Math.max(wordsArray.length, meaningsArray.length));
    }</script>

<div class="wordMeaningsTable">
	<table>
		<thead>
			<tr>
				<th colspan="3" style="text-align: center;">{topicName || ''}</th>
			</tr>
			<tr>
				<th colspan="2" style="text-align: center;">Words</th>
				<th style="text-align: center;">Meaning</th>
			</tr>
		</thead>
		<tbody>
			{#each indices as index (index)}
				<tr>
					<td style="width: 1vw; text-align: center;">{index}</td>
					<td>{wordsArray[index - 1] || ''}</td>
					<td>{meaningsArray[index - 1] || ''}</td>
				</tr>
			{/each}
			{#if indices.length === 0}
				<tr>
					<td colspan="3" style="text-align: center;">No data available</td>
				</tr>
			{/if}
		</tbody>
	</table>
</div>
<style>
	/* Optional: Add some basic styling */
	.wordMeaningsTable {
		margin: 20px;
	}

	table {
		width: 100%;
		border-collapse: collapse;
	}

	th,
	td {
		border: 1px solid #ddd;
		padding: 8px;
		text-align: left;
	}

	th {
		text-align: center;
	}

	/* Set equal width for Word and Meaning columns */
	td:nth-child(2),
	td:nth-child(3) {
		width: 200px;
	}
</style>
