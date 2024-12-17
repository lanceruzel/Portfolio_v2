function certificatesData() {
    return {
        isModalOpen: false,
        selectedCert: {},
        certificates: [
            {
                id: 1,
                title: "IT Specialist - Device Configuration and Management",
                issuer: "Certiport",
                image: "./assets/certificates/Cert10192854592-1.jpg",
                link: "https://www.credly.com/badges/0b3d7bd8-e2d2-4544-8810-abc6ef076e7e/public_url"
            },
            {
                id: 2,
                title: "IT Specialist - Networking",
                issuer: "Certiport",
                image: "./assets/certificates/Cert40474095-1.jpg",
                link: "https://www.credly.com/badges/5828e3d1-ad23-4112-9556-f4e1794e1a27/public_url"
            },
            {
                id: 3,
                title: "IT Specialist - Network Security",
                issuer: "Certiport",
                image: "./assets/certificates/Cert2667401288-1.jpg",
                link: "https://www.credly.com/badges/4671a646-c61a-4831-a4e1-ec350ffbc424/public_url"
            },
            {
                id: 4,
                title: "Cisco Certified Support Technician Cybersecurity",
                issuer: "Certiport",
                image: "./assets/certificates/Cert21374017330-1.jpg",
                link: "https://www.credly.com/badges/8fc3076e-ada6-4b8f-b5dd-b1b7e444932c/public_url"
            },
            {
                id: 5,
                title: "IT Specialist - Cybersecurity",
                issuer: "Certiport",
                image: "./assets/certificates/Cert54373949168-1.jpg",
                link: "https://www.credly.com/badges/48659aaa-781b-4590-8efa-16aa80d915c2/public_url"
            }
        ],
        openModal(cert) {
            this.selectedCert = cert;
            this.isModalOpen = true;
        },
        closeModal() {
            this.isModalOpen = false;
        }
    }
}

function carouselData() {
    return {
        modalOpen: false,
        selectedProject: null,
        modalCurrentIndex: 0,
        projects: [
            {
                id: 1,
                name: "GlobeConnect",
                description: "A social commerce website enabling multi-merchant product sales, real-time livestreaming, shopping, and secure online payments via PayPal",
                images: [],
                imageFolder: "./assets/Projects/GlobeConnect/",
                stacks: ["Tailwind CSS", "JavaScript", "Alpine.js", "Laravel", "Livewire"],
                link: '#'
            },
            {
                id: 2,
                name: "Taskflow",
                description: "Taskflow is a simple task management tool built with Laravel and Vue.js. It allows users to add, update, and delete projects and tasks, with a smooth drag-and-drop feature for organizing tasks easily.",
                images: [],
                imageFolder: "./assets/Projects/Taskflow/",
                stacks: ["Tailwind CSS", "JavaScript", "VueJs", "Laravel"],
                link: 'task-flow.free.nf'
            },
            {
                id: 3,
                name: "Dormitory Management System",
                description: "A personal project designed to streamline dormitory operations with features for account management, student registration, room assignments, inventory tracking, and bill/payment management.",
                images: [],
                imageFolder: "./assets/Projects/Dormitory/",
                stacks: ["Bootstrap 5", "Javascript", "Laravel", "Livewire"],
                link: '#'
            },
            {
                id: 4,
                name: "Restaurant Management System",
                description: "A management system featuring account, menu, order, table, and bill management, along with a simple POS for streamlined restaurant operations.",
                images: [],
                imageFolder: "./assets/Projects/Restaurant/",
                stacks: ["Bootstrap 5", "JavaScript", "jQuery", "Laravel"],
                link: '#'
            },
        ],
        init() {
            this.loadProjectImages();
        },
        loadProjectImages() {
            this.projects.forEach(project => {
                this.loadImagesForProject(project);
            });
        },
        loadImagesForProject(project) {
            const loadImage = (index) => {
                const img = new Image();
                img.onload = () => {
                    project.images.push(img.src);
                    loadImage(index + 1);
                };
                img.onerror = () => {
                    if (project.images.length === 0) {
                        project.images.push('/placeholder.svg?height=300&width=300');
                    }
                };
                img.src = `${project.imageFolder}${index}.png`;
            };
            
            loadImage(1);
        },
        openModal(project) {
            this.selectedProject = project;
            this.modalOpen = true;
            this.modalCurrentIndex = 0;
        },
        closeModal() {
            this.modalOpen = false;
            //this.selectedProject = null;
        },
        nextModalImage() {
            if (this.modalCurrentIndex < this.selectedProject.images.length - 1) {
                this.modalCurrentIndex++;
            }
        },
        prevModalImage() {
            if (this.modalCurrentIndex > 0) {
                this.modalCurrentIndex--;
            }
        }
    };
}
