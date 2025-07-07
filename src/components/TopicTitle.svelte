<script lang="ts">
	export let topicName: string;
	export let updateTopicName: (arg0: any) => void;

	function handleTopicNameChange(event: { target: { value: any } }) {
		updateTopicName(event.target.value);
	}
</script>

<div>
	<input
		bind:value={topicName}
		on:input={() => handleTopicNameChange}
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
