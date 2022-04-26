<script lang="ts">
import { PersonalCharacteristic } from "@/types/personal-characteristics";
import { defineComponent, PropType } from "vue";
import ActionButton from "@/components/patients/ActionButton.vue";


export default defineComponent( {
	components: { ActionButton },
	// props: {
	// 	data: {
	// 		type: Array as PropType<PersonalCharacteristic[]>,
	// 		default: () => []
	// 	}
	// },
	data(){
		return{
			tableData:[
				{
					id:0,
					type: "Personal Pronouns",
					performer: "John Doe",
					method: "Self Reported",
					value: "he/him/his/his/himself",
					detailedValue: ""
				},
				{
					id:1,
					type: "Observation Ethnicity",
					performer: "John Doe",
					method: "Self Reported",
					value: "Hispanic or Latino",
					detailedValue: "American Indian or Alaska Native",
					derivedFrom:''
				}
			]
		};
	},
		methods:{
			remove(row:any) {
				this.tableData=this.tableData.filter((elem)=>{
					return elem.id!==row.id
				})
			},
			download(row:any) {
				let url = document.createElement("a");
				url.setAttribute("href", row.derivedFrom);
				document.body.appendChild(url);
				url.click();
				document.body.removeChild(url);

			}
		}
});

</script>
<template>
	<div class="table-wrapper">
		<el-table
			ref="tableEl"
			:data="tableData"
		>
			<el-table-column
				property="type"
				label="Type"
			/>

			<el-table-column
				label="Performer"
				property="performer"
			/>
			<el-table-column
				label="Method"
				property="method"
			/>

			<el-table-column
				label="Value"
				property="value"
			/>
			<el-table-column
				label="Description"
				property="description"
			/>

			<el-table-column
				label="Detailed Value"
				property="detailedValue"
			/>
			<el-table-column
					label="Actions"

			>
				<template #default="scope">
					<ActionButton
							icon-class="icon-remove"
							label="Remove"
							@click="remove(scope.row)"

					/>
					<ActionButton
							v-if="scope.row.derivedFrom"
							label="Download"
							icon-class="icon-download"
							@click="download(scope.row)"

					/>
				</template>
			</el-table-column>
		</el-table>
	</div>
</template>

<style lang="scss" scoped>
@import "~@/assets/scss/abstracts/variables";
@import "~@/assets/scss/abstracts/mixins";

.title {
	margin-top: 10px;
	display: flex;
	justify-content: space-between;

	h3 {
		font-weight: $global-font-weight-medium;
		margin: 0 0 0 20px;
	}
}

.table-wrapper {
	background-color: $global-background;
	border-radius: 5px;
	border: 1px solid $global-base-border-color;
	padding: 10px 20px;
	min-height: 130px;

	+ .table-wrapper {
		margin-top: 30px;
	}
}

.icon-link {
	position: relative;
	left: 7px;
	cursor: pointer;

	@include icon("~@/assets/images/link.svg", 14px, 14px);
}

.cell-wrapper {
	display: flex;
	min-width: 60%;

	.icon-link {
		min-height: 14px;
		min-width: 14px;
	}
}

.cell-text {
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
}
</style>
