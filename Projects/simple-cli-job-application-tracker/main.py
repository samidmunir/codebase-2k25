import json
import time

JSON_FILE_PATH = 'job_applications.json'

class JobApplication:
    def __init__(
            self,
            id: str,
            title: str,
            company: str,
            link: str,
            date_applied: str,
            status: str,
            description: str,
            notes: str,
    ):
        self.id = id
        self.title = title
        self.company = company
        self.link = link
        self.date_applied = date_applied
        self.status = status
        self.description = description
        self.notes = notes
    
    def to_dict(self) -> dict:
        return {
            'id': self.id,
            'title': self.title,
            'company': self.company,
            'link': self.link,
            'date_applied': self.date_applied,
            'status': self.status,
            'description': self.description,
            'notes': self.notes,
        }
    
    @staticmethod
    def from_dict(data):
        return JobApplication(
            id = data.get('id'),
            title = data.get('title'),
            company = data.get('company'),
            link = data.get('link'),
            date_applied = data.get('date_applied'),
            status = data.get('status'),
            description = data.get('description'),
            notes = data.get('notes')
        )

APPLICATIONS_LIST = []

def print_update_job_info_menu(job: JobApplication):
    print(f'\n\t1. Update title: {job.title}')
    print(f'\t2. Update company: {job.company}')
    print(f'\t3. Update link: {job.link}')
    print(f'\t4. Update application date: {job.date_applied}')
    print(f'\t5. Update status: {job.status}')
    print(f'\t6. Update description: {job.description}\n')
    print(f'\t7. Update notes: {job.notes}\n')
    print(f'\t8. Return')

# """
def update_job_controller() -> JobApplication:
    id_to_update = -1

    while (id_to_update == -1 or id_to_update > len(APPLICATIONS_LIST)):
        id_to_update = int(input('Enter ID to update job info: '))
        if id_to_update > 0 and id_to_update <= len(APPLICATIONS_LIST):
            break

    job_application_to_update = None
    for job_application in APPLICATIONS_LIST:
        if job_application.id == id_to_update:
            job_application_to_update = JobApplication.from_dict(job_application)
            break

    print_update_job_info_menu(job = job_application_to_update)
    update_menu_option = -1
    while (update_menu_option == -1 and update_menu_option > 8):
        update_menu_option = input('\tSelect a menu otion: ')

        if update_menu_option == 1:
            print(job_application_to_update)
        elif update_menu_option == 2:
            print(job_application_to_update)
        elif update_menu_option == 3:
            print(job_application_to_update)
        elif update_menu_option == 4:
            print(job_application_to_update)
        elif update_menu_option == 5:
            print(job_application_to_update)
        elif update_menu_option == 6:
            print(job_application_to_update)
        elif update_menu_option == 7:
            print(job_application_to_update)
        elif update_menu_option == 8:
            break
        else:
            print('\n\tInvalid menu option entered...')
# """

def create_job_controller(ID_COUNTER: int) -> JobApplication:
    VALID_INPUT = False
    
    id = ''
    title = ''
    company = ''
    link = ''
    date_applied = ''
    status = ''
    description = ''
    notes = ''

    while not VALID_INPUT:
        title = input('\t\tEnter job title: ')
        company = input('\t\tEnter company name: ')
        link = input('\t\tEnter posting link: ')
        date_applied = input('\t\tEnter application date: ')
        status = input('\t\tAccepted | Rejected | Pending --> ')
        description = input('\t\tDescription: ')
        notes = input('\t\tNotes: ')

        if (title == '' and company == '' and link == '' and date_applied == '' and status == '' and description == ''):
            VALID_INPUT = False
            print('\tUnable to create new job application instance: <Missing information>\n')
        else:
            id = ID_COUNTER
            new_job_application = JobApplication(str(id), title, company, link, date_applied, status, description, notes)
            time.sleep(1)
            print('\tSuccessfully created new job application.')
            return new_job_application

def load_applications(file_path: str) -> list[JobApplication]:
    try:
        with open(file_path, 'r') as file:
            return json.load(file)
    except FileNotFoundError:
        return []

def save_applications(file_path: str, applications: list[JobApplication]):
    with open(file_path, 'w') as file:
        json.dump(applications, file, indent = 4)

def print_welcome_mssg() -> None:
    print('\nWelcome to Job Application Tracker (CLI)')
    print('----------------------------------------')

def print_menu() -> None:
    print('\t1. Add job application')
    print('\t2. Update job application')
    print('\t3. Delete job application')
    print('\t0. QUIT')
    print('\n')

def main() -> None:
    print_welcome_mssg()
    print_menu()

    APPLICATIONS_LIST = load_applications(JSON_FILE_PATH)

    ID_COUNTER = len(APPLICATIONS_LIST)

    RUNNING = True
    NUM_OPTION = -1
    while RUNNING:
        NUM_OPTION = int(input('\tEnter option #: '))

        if NUM_OPTION == 0:
            print('\t\tSaving data & exiting application...')
            time.sleep(2)
            RUNNING = False
        elif NUM_OPTION == 1:
            print('\t\tCalling add_job_controller()...')
            ID_COUNTER += 1
            new_job_application = create_job_controller(ID_COUNTER = ID_COUNTER)
            new_job_application_dict = new_job_application.to_dict()
            APPLICATIONS_LIST.append(new_job_application_dict)
            save_applications(JSON_FILE_PATH, applications = APPLICATIONS_LIST)
            print()
            print_menu()
        elif NUM_OPTION == 2:
            print('\t\tCalling update_job_controller()...')
            update_job_controller()
            print()
            print_menu()
        elif NUM_OPTION == 3:
            print('\t\tCalling delete_job_controller()...')
            print()
            print_menu()
        else:
            print('\tInvalid option # entered...')
            print_menu()


if __name__ == '__main__':
    main()