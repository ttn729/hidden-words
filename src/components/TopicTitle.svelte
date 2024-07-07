<script>
    /**
	 * @type {string}
	 */
     export let topicName;
</script>

<div>
    <input bind:value={topicName} data-testId='titleInput'/>
</div>

<style>
    div {
        display: flex;
        justify-content: center;
    }

    input {
        width: 100%;
    }
</style>