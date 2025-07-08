<script lang="ts">
	import { store } from "../store";
	function handleTopicNameChange(event: { target: { value: any } }) {
		store.setTopicName(event.target.value);
	}
</script>

<div>
	<input
		value={$store.topicName}
		oninput={() => handleTopicNameChange}
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
