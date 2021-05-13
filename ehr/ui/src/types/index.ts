export type Patient = {
	address: string | null,
	age: number | null,
	dob: string | null,
	gender: string | null,
	id: string | null,
	name: string | null
	language: string | null,
	phone: string | null,
	email: string | null,
	employmentStatus: string | null,
	race: string | null,
	ethnicity: string | null,
	education: string | null,
	maritalStatus: string | null,
	insurance: string | null
};

export type User = {
	id: string | null,
	name: string | null,
	userType: string | null
};

export type ContextResponse = {
	patient: Patient,
	user: User
};

export type Organization = {
	errors: string[],
	name: string,
	id: string,
	type: "CBO" | "CBRO"
};

export type Occurrence = {
	start?: string | null,
	end: string
}

export type ServiceRequestGoal = {
	display: string,
	id: string
}

export type Consent = {
	display: string,
	id: string
}

export type ServiceRequestCondition = {
	display: string,
	id: string
}

export type ServiceRequest = {
	category: ServiceRequestCategory,
	details: string,
	errors: string[],
	//todo: on be it's enum right now
	code: string,
	serviceRequestId: string,
	status: ServiceRequestStatus,
	occurrence: Occurrence,
	goals: ServiceRequestGoal[],
	consent: Consent,
	conditions: ServiceRequestCondition[]
};

export type ServiceRequestStatus = "ACTIVE" | "COMPLETED" | "DRAFT" | "ENTEREDINERROR" | "NULL" | "ONHOLD" | "REVOKED" | "UNKNOWN"

export type ServiceRequestCategory = "EDUCATION_DOMAIN" | "EMPLOYMENT_DOMAIN" | "FINANCIAL_STRAIN_DOMAIN" | "FOOD_INSECURITY_DOMAIN" | "HOUSING_INSTABILITY_AND_HOMELESSNESS_DOMAIN" | "INADEQUATE_HOUSING_DOMAIN" | "INTERPERSONAL_VIOLENCE_DOMAIN" | "SDOH_RISK_RELATED_TO_VETERAN_STATUS" | "SOCIAL_ISOLATION_DOMAIN" | "STRESS_DOMAIN" | "TRANSPORTATION_INSECURITY_DOMAIN"

export type Task = {
	comments: Comment[],
	createdAt: string,
	errors: string[],
	id: string,
	lastModified: string | null,
	name: string,
	organization: Organization | null,
	outcome: string | null,
	priority: "ASAP" | "Routine" | "Urgent" | null,
	serviceRequest: ServiceRequest,
	status: TaskStatus,
};

export type newTaskPayload = {
	category: string,
	conditionIds: string[],
	consent: boolean,
	comment: string,
	goalIds: string[],
	performerId: string,
	code: string,
	name: string,
	occurrence: Occurrence | string
};

export type TaskStatus = "ACCEPTED" | "CANCELLED" | "COMPLETED" | "DRAFT" | "ENTEREDINERROR" | "FAILED" | "INPROGRESS" | "NULL" | "ONHOLD" | "READY" | "RECEIVED" | "REJECTED" | "REQUESTED"

export type Condition = {
	clinicalStatus: "ACTIVE" | "INACTIVE" | "NULL" | "RESOLVED",
	conditionId: string,
	dateRecorded: string,
	//todo: it's enum in api
	domain: string,
	errors: string[],
	verificationStatus: "CONFIRMED" | "DIFFERENTIAL" | "ENTEREDINERROR" | "NULL" | "PROVISIONAL" | "REFUTED" | "UNCONFIRMED"
};

export type Goal = {
	achievementStatus: "ACHIEVED" | "IMPROVING" | "INPROGRESS" | "NOCHANGE" | "NOPROGRESS" | "NOTACHIEVED" | "NOTATTAINABLE" | "NULL" | "SUSTAINING" | "WORSENING",
	//todo: it's enum in api
	domain: string,
	errors: string[],
	goalId: string,
	lifecycleStatus: "ACCEPTED" | "ACTIVE" | "CANCELLED" | "COMPLETED" | "ENTEREDINERROR" | "NULL" | "ONHOLD" | "PLANNED" | "PROPOSED" | "REJECTED",
	statusDate: string
};

export type Comment = {
	//todo: what kind of object, for now it's just empty
	author: object,
	text: string,
	time: string
};

export type Category = {
	code: string,
	display: string
};

export type Request = {
	code: string,
	display: string
};
