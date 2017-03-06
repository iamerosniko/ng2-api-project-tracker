USE [dbbtVulTstp1]
GO

ALTER TABLE [dbo].[PT_FollowUpItems] DROP CONSTRAINT [FK_PT_FollowUpItems_PT_Projects]
GO

/****** Object:  Table [dbo].[PT_FollowUpItems]    Script Date: 3/6/2017 12:38:42 PM ******/
DROP TABLE [dbo].[PT_FollowUpItems]
GO

/****** Object:  Table [dbo].[PT_FollowUpItems]    Script Date: 3/6/2017 12:38:42 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[PT_FollowUpItems](
	[pt_fui_id] [uniqueidentifier] NOT NULL,
	[pt_project_id] [uniqueidentifier] NOT NULL,
	[pt_fui_item] [nvarchar](100) NULL,
	[pt_fui_assignee] [nvarchar](100) NULL,
	[pt_fui_comments] [nvarchar](max) NULL,
	[pt_fui_issolved] [bit] NULL,
PRIMARY KEY CLUSTERED 
(
	[pt_fui_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO

ALTER TABLE [dbo].[PT_FollowUpItems]  WITH CHECK ADD  CONSTRAINT [FK_PT_FollowUpItems_PT_Projects] FOREIGN KEY([pt_project_id])
REFERENCES [dbo].[PT_Projects] ([pt_project_id])
GO

ALTER TABLE [dbo].[PT_FollowUpItems] CHECK CONSTRAINT [FK_PT_FollowUpItems_PT_Projects]
GO


