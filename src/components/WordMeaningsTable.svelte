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
    .wordMeaningsTable {
        margin: 1vw;
    }

    table {
        width: 100%;
        border-collapse: collapse;
        border: 1px solid #3c3c3c; /* Solid border for the table */
    }

    th,
    td {
        padding-left: 1vw;
		padding-right: 1vw;
        text-align: left;
        border-bottom: 1px dashed #3c3c3c; /* Dashed border for cell bottom */
        border-top: 1px dashed #3c3c3c; /* Dashed border for cell top */
        position: relative; /* Ensure position relative for pseudo-element positioning */
    }

    th {
        text-align: center;
        border: 1px solid #3c3c3c; /* Solid border for table headers */
    }

    td:nth-child(2),
    td:nth-child(3) {
        width: 40vw;
        border-left: 1px dashed #3c3c3c; /* Dashed vertical border between columns */
    }

    /* Optional: Remove bottom border from last row */
    tbody tr:last-child td {
        border-bottom: none;
    }

  .wordMeaningsTable tbody td ,
  .wordMeaningsTable th {
    font-size: 2em; /* Adjust this value as needed */
  }
</style>
