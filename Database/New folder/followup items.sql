USE [dbbtVulTstp1]
GO

/****** Object:  Table [dbo].[PT_FollowUpItems]    Script Date: 3/3/2017 11:44:18 AM ******/
DROP TABLE [dbo].[PT_FollowUpItems]
GO

/****** Object:  Table [dbo].[PT_FollowUpItems]    Script Date: 3/3/2017 11:44:18 AM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[PT_FollowUpItems](
	[pt_fui_id] [uniqueidentifier] NOT NULL,
	[pt_project_id] [nvarchar](100) NULL,
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


