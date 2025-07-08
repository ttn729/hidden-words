<script lang="ts">
	// @ts-nocheck
	import { store } from '../store';
	
</script>

<div>
	<input
		value={$store.topicName}
		oninput={(e) => store.setTopicName(e.target.value)}
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
