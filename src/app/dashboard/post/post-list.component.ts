import { Component, OnInit } from '@angular/core';
import { ProviderService } from './../../shared/services/provider.service';
import { TaskService } from './../../shared/services/task.service';
import { TaskDto, PageTaskDto } from './../../shared/models/models';
import { Constant } from './../../shared/utils/constant'
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-post',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
  isSubmitting: boolean;

  pageConfig = {
    itemsPerPage: Constant.PAGINATION_MAX_RECS,
    currentPage: 1,
    totalItems: 0
  };

  pageTask: PageTaskDto;
  isLoading: boolean;


  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.loadTasks();
  }


  /**
     * Change page event ,get next elements
    */
  pageChanged(event) {

    // this.isLoading = true;

    this.pageConfig.currentPage = event - 1;
    this.loadTasks(this.pageConfig.currentPage);

  }

  loadTasks(pageNo?: number, pageSize?: number, sortBy?: string) {
    this.isLoading = true;
    this.taskService.getAllUserTasks(pageNo, pageSize, sortBy).pipe(finalize(() => {
      this.isLoading = false;
    })).subscribe(data => {
      this.pageTask = data;
      this.pageConfig.totalItems = data.totalElements;
    },
      err => {
        console.log(err);
      });
  }

  deleteTask(id: number, index: number) {
    this.taskService.deleteTask(id).subscribe((data => {

      this.pageTask.tasks.splice(index, 1);
    }), err => {

    });
  }

}
