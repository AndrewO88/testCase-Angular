import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PostsService } from '../posts.service';
import { Router } from '@angular/router';


const createForm = () => {
  return new FormGroup({
    title: new FormControl('', [
      Validators.required
    ]),
    text: new FormControl(null, [
      Validators.required
    ])
  });
};

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class AddPostComponent implements OnInit {

  form: FormGroup;
  id: number;

  constructor(
    private posts$: PostsService,
    private router: Router
  ) { }

  ngOnInit() {
    this.form = createForm();
  }

  submit() {
    if (this.form.valid && this.form.value.title.trim() && this.form.value.text.trim()) {
      this.id = this.posts$.getValue().length + 1;
      const formData = { ...this.form.value, id: this.id };
      this.posts$.addPost(formData);
      this.form.reset();
      this.router.navigate([`/${this.id}`])
    } else {
      this.form.reset();
    }
  }
}
