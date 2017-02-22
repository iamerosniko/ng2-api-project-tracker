USE [dbbtVulTstp1]
GO

/****** Object:  Table [dbo].[PT_ProjectDetails]    Script Date: 2/22/2017 4:45:03 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[PT_ProjectDetails](
	[pt_detail_id] [uniqueidentifier] NOT NULL,
	[pt_project_id] [uniqueidentifier] NOT NULL,
	[pt_detail_priority] [nvarchar](10) NOT NULL,
	[pt_detail_task] [nvarchar](250) NOT NULL,
	[pt_detail_assignee] [nvarchar](250) NOT NULL,
	[pt_detail_description] [nvarchar](250) NULL,
	[pt_detail_deliverable] [nvarchar](250) NULL,
	[pt_detail_eststart] [datetime] NULL,
	[pt_detail_estend] [datetime] NULL,
	[pt_detail_actstart] [datetime] NULL,
	[pt_detail_actend] [datetime] NULL,
	[pt_detail_status] [nvarchar](50) NOT NULL,
	[pt_detail_deleted] [bit] NOT NULL,
	[pt_detail_show] [bit] NOT NULL,
 CONSTRAINT [PK_PT_ProjectDetails] PRIMARY KEY CLUSTERED 
(
	[pt_detail_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO

ALTER TABLE [dbo].[PT_ProjectDetails]  WITH CHECK ADD  CONSTRAINT [FK_PT_ProjectDetails_PT_Projects] FOREIGN KEY([pt_project_id])
REFERENCES [dbo].[PT_Projects] ([pt_project_id])
GO

ALTER TABLE [dbo].[PT_ProjectDetails] CHECK CONSTRAINT [FK_PT_ProjectDetails_PT_Projects]
GO


