<template>
	<div>
		<template v-for="(n,index) in 5">
			<Tag closable color="blue" :key="index">标签{{index}}</Tag>
		</template>
	</div>
</template>

<script>
export default{
	props: ['datas']
}
</script>
