<script>
	/**
	 * @type {string}
	 */
	export let topicName;
	/**
	 * @type {(arg0: any) => void}
	 */
	export let updateTopicName;

    	/**
	 * @param {{ target: any }} event
	 */
	function handleTopicNameChange(event) {
		updateTopicName(event.target.value);
	}
</script>

<div>
	<input
		bind:value={topicName}
		on:input={handleTopicNameChange}
		placeholder={'Type the topic title here'}
		data-testId="titleInput"
	/>
</div>

<style>
	div {
		display: flex;
		justify-content: center;
		margin-top: 1vw;
	}

	input {
		width: 80%;
		font-size: x-large;
	}
</style>
