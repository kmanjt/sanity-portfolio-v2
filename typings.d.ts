interface SanityBody {
    _createdAt: string;
    _id: string;
    _rev: string;
    _updatedAt: string;
}

export interface Social extends SanityBody {
    _type: 'social';
    title: string;
    url: string;
}

interface Image {
    _type: 'image';
    asset: {
        _ref: string;
        _type: 'reference';
};
}

export interface PageInfo extends SanityBody {
    _type: 'pageInfo';
    name: string;
    role: string;
    heroImage: Image;
    backgroundInformation: string;
    profilePic: Image;
    phoneNumber: string;
    email: string;
    socials: Social[];
}


export interface Technology extends SanityBody {
    _type: 'skill';
    title: string;
    image: Image;
}

export interface Skill extends SanityBody {
    _type: 'skill';
    title: string;
    image: Image;
}

export interface Project extends SanityBody {
    _type: 'project';
    title: string;
    image: Image;
    summary: string;
    technologies: Technology[];
    linkToBuild: string;
}

export interface Experience extends SanityBody {
    _type: 'experience';
    jobTitle: string;
    companyImage: Image;
    company: string;
    dateStarted: string;
    dateEnded: string;
    isCurrentlyWorkingHere: boolean;
    technologies: Technology[];
    points: string[];
}
