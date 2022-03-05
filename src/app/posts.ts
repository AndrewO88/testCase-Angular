export interface Post {
  title: string;
  text: string;
  id: number;
}

export const POSTS: Post[] = [
  {
    title: 'Заметка 1',
    // tslint:disable-next-line:max-line-length
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. \n Commodi doloremque eligendi ipsam iure iusto minima reiciendis tempora. \n  Autem blanditiis consectetur debitis dicta illum perferendis quisquam sunt, ullam voluptatem? Eius expedita fugit libero modi necessitatibus odio odit, officiis saepe sapiente veritatis?',
    id: 1
  },
  {
    title: 'Заметка 2',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. \n  Commodi doloremque eligendi ipsam iure iusto minima reiciendis tempora. \n  Autem blanditiis consectetur debitis dicta illum perferendis quisquam sunt, ullam voluptatem? Eius expedita fugit libero modi necessitatibus odio odit, officiis saepe sapiente veritatis?',
    id: 2
  },
  {
    title: 'Заметка 3',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. \n  Commodi doloremque eligendi ipsam iure iusto minima reiciendis tempora. \n  Autem blanditiis consectetur debitis dicta illum perferendis quisquam sunt, ullam voluptatem? Eius expedita fugit libero modi necessitatibus odio odit, officiis saepe sapiente veritatis?',
    id: 3
  },
  {
    title: 'Заметка 4',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.  \n  Commodi doloremque eligendi ipsam iure iusto minima reiciendis tempora. \n  Autem blanditiis consectetur debitis dicta illum perferendis quisquam sunt, ullam voluptatem? Eius expedita fugit libero modi necessitatibus odio odit, officiis saepe sapiente veritatis?',
    id: 4
  },
];
