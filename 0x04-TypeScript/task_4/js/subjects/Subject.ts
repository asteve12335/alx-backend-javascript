// task_4/js/subjects/Subject.ts
namespace Subjects {
	export class Subject {
		private _teacher: Teacher | undefined;

		setTeacher(teacher: Teacher): void {
			this._teacher = teacher;
		}
	}
}
